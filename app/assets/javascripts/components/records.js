this.Records = React.createClass({
  getInitialState: function(){
    return {
      records: this.props.data
    };
  },

  getDefaultProps: function(){
    return{
      records: []
    };
  },

  render: function(){
    var record;

    return React.DOM.div(
      { className: 'records' },

      React.DOM.h2(
        { className: 'title' },
        'Records'
      ),

      React.DOM.table(
        { className: 'record-table' },

        React.DOM.thead(null,
          React.DOM.tr(null,
            React.DOM.th(null, 'Date'),
            React.DOM.th(null, 'Title'),
            React.DOM.th(null, 'Amount')
          )
        ),

        (function() {
          var i, length, ref, results;
          ref = this.state.records;
          results = [];

          for (i = 0, length = ref.length; i < length; i++) {
            record = ref[i];
            results.push(
              React.DOM.tbody(null,
                React.createElement(Record, {
                  key: record.id,
                  record: record
                })
              )
            );
          }

          return results;

        }).call(this)
      )
    );
  }
});
