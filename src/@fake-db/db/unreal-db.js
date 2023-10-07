import _ from '@lodash';
import sub from 'date-fns/sub';
import getUnixTime from 'date-fns/getUnixTime';
import add from 'date-fns/add';
import mock from '../mock';

const UnrealDB = {
    scenes: [
        {
            id: "3df22d3xs",
            name: "My Scene",
            uri: "my-scene-unreal-engine",
        },
        {
            id: "5abe3d3xf",
            name: "Hero Scene",
            uri: "hero-scene-unreal-engine",
        }
    ]
}


mock.onGet('/api/unreal-app/scenes').reply(() => {
	const response = _.map(UnrealDB.scenes, scene => _.pick(scene, ['id', 'name', 'uri']));
	return [200, response];
});

mock.onGet('/api/unreal-app/scene').reply(config => {
    const sceneId = config.params.id
    const response = _.find(UnrealDB.scenes, {id: sceneId})

    if(response) {
        return [200, response]
    }
    return [404, 'Requested board do not exist.'];
})

mock.onPost('/api/unreal-app/scene/new').reply(request => {
	const { scene } = JSON.parse(request.data);
	UnrealDB.scenes = [...UnrealDB.scenes, scene];
	return [200, _.pick(scene, ['id', 'name', 'uri'])];
});