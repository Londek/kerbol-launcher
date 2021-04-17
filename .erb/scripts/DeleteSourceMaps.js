import path from 'path';
import rimraf from 'rimraf';

export default function deleteSourceMaps() {
  rimraf.sync(path.join(__dirname, '../../dist/*.js.map'));
  rimraf.sync(path.join(__dirname, '../../*.js.map'));
}