import { AppBar, Toolbar, Button, Hidden, IconButton, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store';
import { getScene, resetScene } from '../store/sceneSlice';
import UnrealViewer from './UnrealViewer/player';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '#fuse-main': {
      height: '100vh',
    },
  },
}));

function Scene(props) {
  const classes = useStyles(props);

  const dispatch = useDispatch();
  const scene = useSelector(getScene);

  const routeParams = useParams();
  const containerRef = useRef(null);

  useDeepCompareEffect(() => {
    dispatch(getScene(routeParams));
    return () => {
      dispatch(resetScene());
    };
  }, [dispatch, routeParams]);

  if (!scene) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-auto flex-col w-full h-full relative" ref={containerRef}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-48 sm:h-64 sm:h-96 container">
          <Hidden xsDown>
            <Button
              to="/apps/unreal/scenes/"
              component={Link}
              variant="contained"
              color="secondary"
            >
              <Icon>assessment</Icon>
              <span className="px-8">Boards</span>
            </Button>
          </Hidden>

          <Hidden smUp>
            <IconButton color="inherit" to="/apps/unreal/scenes/" component={Link}>
              <Icon>assessment</Icon>
            </IconButton>
          </Hidden>

          <div className="flex flex-1 justify-center items-center">{scene.name}</div>
        </Toolbar>
      </AppBar>
      <UnrealViewer />
    </div>
  );
}

export default withReducer('unrealdApp', reducer)(withRouter(Scene));
