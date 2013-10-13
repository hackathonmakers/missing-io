'use strict';

angular.module('missing-io', ['missing-io.controllers', 'missing-io.services'])
  .run(function ($rootScope) {

    moment().lang('es');
  });
