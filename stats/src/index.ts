import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// not use if we use static
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzer/WinsAnalysis';

// const render = new MatchReader('football.csv');
// render.read();

// const dateOfFirstMatch = render.data[0][0];

// console.log(render.data[0]);

// const homeWin = 'H'
// const awayWin = 'A'
// const draw = 'D'
// const MatchResult ={
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D',
// }
// Enum = enumeration
// is a object that collect all possible values of some property and that value will be number or string
// enum MatchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D',
// }
// enum can be a new type too

// Refactor
// Create an object that satisfies rge 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataRender' interface
// const matchReader = new MatchReader(csvFileReader);
// after use static
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
// now we have matchReader.match === [[tuple MatchData]]

// console.log(`Man united won ${manUnitedWins} games`);

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

// const summary2 = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// after use static
const summary2 = Summary.winsAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
