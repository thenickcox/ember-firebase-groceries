function compile(template) {
  var templateName = template.split('/templates/').reverse()[0].replace('.hbs', '');
  $.ajax({
    url: template,
    cache: false,
    async: false,
    success: function (source) {
      var input = Ember.Handlebars.precompile(source.toString());
      Ember.TEMPLATES[templateName] = Ember.Handlebars.template(input);
    }
  });
}
compile('javascripts/templates/application.hbs');
compile('javascripts/templates/items.hbs');
compile('javascripts/templates/_header.hbs');
compile('javascripts/templates/_items.hbs');
compile('javascripts/templates/_bottom_utilities.hbs');
