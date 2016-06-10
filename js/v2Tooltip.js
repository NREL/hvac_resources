angular.module('v2.tooltip',[])
.provider("tooltipSettings", function() {

  var options = {
    placement: "top",
    arrowHeight: 5,
    mouseoverTooltip: false,
    timeoutDelay: 90,
    animation: true
  };

  return {
   /**
    * angular.module('App',function(tooltipSettingsProvider) {
    *  // Set the default placement to bottom instead of top
    *  tooltipSettingsProvider.options({placement:"Bottom"});
    * })
    */
    options: function (value) {
      angular.extend(options,value);
    },
    $get: function () {
      return options;
    }
  }
})
.directive('v2Tooltip',['$interpolate','$compile','$document','$window','$timeout','tooltipSettings',
  function($interpolate,$compile,$document,$window,$timeout,tooltipSettings) {
  return {
    restrict: 'A',
    controller: function($scope,$window,$document) {
      var vm = this;

      vm.positionElement = function positionElement (hostElem,targetElem,placement,arrowHeight) {
        var hostElemPos = vm.offset(hostElem);
        var targetElemPos = {top: 0, left: 0, placement: placement};

        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

        if(hostElemPos.top - targetHeight - arrowHeight < $window.pageYOffset) {
          placement = 'bottom';
          targetElemPos.placement = 'bottom';
        }

        switch(placement) {
          case 'top' :
          targetElemPos.top = hostElemPos.top - targetHeight - arrowHeight;
          break;
          case 'bottom' :
          targetElemPos.top = hostElemPos.top + hostElemPos.height + arrowHeight;
          break;
        }

        targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;

        if (hostElemPos.left - targetWidth / 2 < 0) {
          targetElemPos.left = 0;
        }

        return targetElemPos;
      }

      vm.offset = function offset(element,placement) {
        element = vm.getRawNode(element);

        var elemBCR = element.getBoundingClientRect();
        return {
          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : element.offsetWidth),
          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : element.offsetHeight),
          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
        };
      };

      vm.getRawNode = function getRawNode(elem) {
        return elem.nodeName ? elem : elem[0] || elem;
      };

      vm.stringToBoolean = function stringToBoolean(string) {
        if(string) {
          if (string.toLowerCase() === 'true') {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      };

    },
    link: function (scope,element,attrs,vm) {

      // Init

      // Create a child scope for each tooltip
      // So it doesn't conflict with each other
      var ttScope;

      var content = attrs.v2Tooltip;


      var showTimeout;
      var hideTimeout;

      // Get attribute

      var placement = (attrs.placement || tooltipSettings.placement);
      var arrowHeight = (attrs.arrowHeight || tooltipSettings.arrowHeight);
      var mouseoverTooltip = (vm.stringToBoolean(attrs.mouseoverTooltip) || tooltipSettings.mouseoverTooltip);
      var animation = (vm.stringToBoolean(attrs.animation) || tooltipSettings.animation);
      var timeoutDelay = (parseInt(attrs.timeoutDelay) || tooltipSettings.timeoutDelay);


      var template;

      scope.placement = 'bottom';

      if (mouseoverTooltip) {
        template = '<div class="v2-tooltip" ' + 
        'ng-mouseover="onMouseover()" '+
        'ng-mouseleave="onMouseLeave()" ' +
        'ng-style="{\'top\': ttTop,\'left\': ttLeft}"' +
        'ng-class="placement">' +  
           content +
        '</div>'; 
      } else {
        template = '<div class="v2-tooltip" ' + 
        'ng-style="{\'top\': ttTop,\'left\': ttLeft}">' +
        'ng-class="placement>' +
           content +
        '</div>'; 
      }

      /*tooltip.css({
        top:  ttTop + 'px',
        left: ttLeft + 'px',
        visibility: 'visible'
      });*/

      var tooltipLinker = $compile(template);
      var tooltip;
      var ttPosition;


      // Event

      element.bind('mouseenter',showTooltip);
      element.bind('mouseleave',hideTooltip);

      function showTooltip(event) {
        if(mouseoverTooltip) {
          $timeout.cancel(hideTimeout);
          showTimeout = $timeout(function() {
            createTooltip();
            positionTooltip();
          },timeoutDelay);
        } else {
          createTooltip();
          positionTooltip();
        }
        
      }

      function positionTooltip () {
        // Position tooltip
        scope.$apply(
          function updatePosition() {
            ttScope.ttLeft = ttPosition.left;
            ttScope.ttTop = ttPosition.top;
          }
        );
      }

      function hideTooltip(event) {
        if(mouseoverTooltip) {
          $timeout.cancel(showTimeout);
           hideTimeout = $timeout(function() {
            removeTooltip();
           },timeoutDelay);
        } else {
          removeTooltip();
        }
      }

      function removeTooltip () {
        if(ttScope) {
          ttScope.$destroy();
          ttScope = null;
        }
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        }
      }

      function createTooltip() {

        // stop if tooltip already exist
        if (tooltip) {
          return;
        }

        ttScope = scope.$new(true);

        ttScope.content = content;

        ttScope.ttLeft = 0;
        ttScope.ttTop = 0;

        // append tooltip to the body
        tooltip = tooltipLinker(ttScope, function(tooltip) {
          $document.find('body').append(tooltip);
        });

        // Get the Position of tooltip
        ttPosition = vm.positionElement(element,tooltip,placement,arrowHeight);

        ttScope.placement = ttPosition.placement;


        // tooltip event for mouseoverTooltip 

        ttScope.onMouseover = function onMouseover () {
          $timeout.cancel(hideTimeout);
        }

        ttScope.onMouseLeave = function onMouseLeave () {
          hideTimeout = $timeout(function() {
           removeTooltip();
          },timeoutDelay);
        }
      }

      scope.$on('destroy',function(event) {
        $timeout.cancel(showTimeout);
        $timeout.cancel(hideTimeout);
        ttScope.$destroy();
      }); 

    }
  }
}]);