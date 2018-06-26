const PubSub = require("../helpers/pub_sub.js");

const InstrumentInfoView = function (container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEventsInfo = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.generate(instrument);
    console.log(evt.detail);
    console.log(evt);
  });
};

InstrumentInfoView.prototype.generate = function(instrument){
  console.log(instrument);
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Type: ${instrument.name}, Description: ${instrument.description}, Other Instruments: ${instrument.instruments}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};


module.exports = InstrumentInfoView;
