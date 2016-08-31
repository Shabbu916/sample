/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.projectmanagment', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('projectmanagment', {
          url: '/projectmanagment',
          template : '<ui-view></ui-view>',
          abstract: true,
          title:'projectmanagment',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('projectmanagment.addproject', {
          url: '/addproject',
          templateUrl: 'app/pages/projectmanagment/addproject/addproject.html',
          title: 'addproject',
          sidebarMeta: {
            order: 0,
          },



        });
  }
})();
