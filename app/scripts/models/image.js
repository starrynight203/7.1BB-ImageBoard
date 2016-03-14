var $ = require('jquery');
var Backbone = require('backbone');

var ImageModel = Backbone.Model.extend({

});

var ImageModelCollection = Backbone.Collection.extend({
  model: ImageModel
});

module.exports = {"ImageModelCollection": ImageModelCollection};
