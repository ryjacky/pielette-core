import { GetPluginList } from '../src/PluginManager';

test('Test GetPluginList', done => {
  void GetPluginList().then(list => {
    console.log(list);
    done();
  });
});
