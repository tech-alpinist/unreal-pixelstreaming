import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function SceneModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    name: 'Untitled Scene',
    uri: 'Untitled Scene',
  });
}

export default SceneModel;
