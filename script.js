const client = algoliasearch('CHC21NM3YD', 'ed25ab900a66ade634f78b1a42440cd1');
const index = client.initIndex('Marketing website');

autocomplete('#search-input', { hint: false }, [
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 10 }),
    displayKey: 'title',
    templates: {
      suggestion: function(suggestion) {
        if (suggestion.title) {
          if (suggestion.categoryTag === 'Knowledgebase') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Blog') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-blog font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Ecosystem') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-eco font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Event') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-event font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'FAQ') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-faq font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Case study') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-case font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Docs') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-docs font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Customer') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-customer font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Partner') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-partner font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
          if (suggestion.categoryTag === 'Pricing FAQ') {
            return (
              '<div class="text-uppercase padding-top font bold">' +
              suggestion.title +
              '</a></div><div class="padding-inside text-muted font">' +
              suggestion._highlightResult.teaser.value +
              '</div><div class="result-title-tag-priceFaq font">' +
              suggestion.categoryTag +
              '</div>'
            );
          }
        }
      }
    }
  }
]).on('autocomplete:selected', function(event, suggestion) {
  const url = suggestion.url;
  window.open(url, '_blank');
  // console.log(suggestion, dataset);
  // console.log(suggestion.url);
});
