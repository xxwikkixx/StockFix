var React = require('react');
var ReactDOM = require('react-dom');

var tableStyles = {
  width: '100%'
};

var data = [
  {id:'1',symbol:'dfs',type:'Long',price:'0.43',enter:'0.12',exit:'2.10',stop:'0.10',volume:'3214', sent:'10:00am'},
  {id:'2',symbol:'wer',type:'Short',price:'9.22',enter:'4.51',exit:'10.00',stop:'4.00',volume:'323', sent:'3:00pm'},
  {id:'3',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'4',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'5',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'6',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'7',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'8',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'9',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'10',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'11',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'12',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'13',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'14',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'15',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'16',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'17',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'18',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'19',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'20',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'21',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'22',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'23',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'24',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'},
  {id:'25',symbol:'tdf',type:'Long',price:'2.31',enter:'3.21',exit:'4.00',stop:'2.00',volume:'34123', sent:'12:32pm'}

];

var SignalItem = React.createClass({
  render: function(){
    return(
      <tr>
        <td>{this.props.symbol}</td>
        <td>{this.props.type}</td>
        <td>{this.props.price}</td>
        <td>{this.props.enter}</td>
        <td>{this.props.exit}</td>
        <td>{this.props.stop}</td>
        <td>{this.props.volume}</td>
        <td>{this.props.sent}</td>
      </tr>
    );
  }
});

var SignalTable = React.createClass({
  render: function(){
    var items = this.props.url.map(function(data){
      return(
        <SignalItem id={data.id} symbol={data.symbol} type={data.type}
          price={data.price} enter={data.enter} exit={data.exit} stop={data.stop}
          volume={data.volume} sent={data.sent} />
      );
    });
    return(
      <table style={tableStyles}>
        {items}
      </table>
    );
  }
});

var MainBody = React.createClass({
  render: function(){
    return(
      <div className='container-fluid container-max'>
        <div className='page-header'>
          <h1>Signals</h1>
        </div>
        <SignalTable url={data} />
      </div>
    );
  }
});

ReactDOM.render(
  <MainBody />,
  document.getElementById('content')
);
