const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const selectElement = document.querySelector("#instrument-families");
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEventsSelect();

  const infoDiv = document.querySelector('#instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEventsInfo();

  const instrumentsDataSource = new InstrumentFamilies();
  instrumentsDataSource.bindEventsInstrument();
});
