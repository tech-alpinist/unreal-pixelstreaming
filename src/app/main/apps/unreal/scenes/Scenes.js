import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer from '../store';
import { selectScenes, newScene, getScenes, resetScenes } from '../store/scenesSlice';

const useStyles = makeStyles((theme) => ({
  root: {},
  scene: {
    cursor: 'pointer',
    transitionProperty: 'box-shadow border-color',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
  newScene: {},
}));

function Scenes(props) {
  const dispatch = useDispatch();
  const scenes = useSelector(selectScenes);

  const classes = useStyles(props);

  useEffect(() => {
    dispatch(getScenes());
    return () => {
      dispatch(resetScenes());
    };
  }, [dispatch]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={clsx(classes.root, 'flex flex-grow flex-shrink-0 flex-col items-center')}>
      <div className="flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.1 } }}>
          <Typography
            className="mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-bold"
            color="inherit"
          >
            Unreal Engine Viewer
          </Typography>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap w-full justify-center py-32 px-16"
        >
          {scenes.map((scene) => (
            <motion.div variants={item} className="w-224 h-224 p-16" key={scene.id}>
              <Paper
                to={`/apps/unreal/scene/${scene.id}`}
                className={clsx(
                  classes.scene,
                  'flex flex-col items-center justify-center w-full h-full rounded-16 py-24 shadow hover:shadow-lg'
                )}
                role="button"
                component={Link}
              >
                <Icon className="text-56" color="action">
                  assessment
                </Icon>
                <Typography className="text-16 font-medium text-center pt-16 px-32" color="inherit">
                  {scene.name}
                </Typography>
              </Paper>
            </motion.div>
          ))}
          {/* <motion.div variants={item} className="w-224 h-224 p-16">
            <Paper
              className={clsx(
                classes.scene,
                classes.newscene,
                'flex flex-col items-center justify-center w-full h-full rounded-16 py-24 shadow hover:shadow-lg outline-none'
              )}
              onClick={() => dispatch(newScene())}
              onKeyDown={() => dispatch(newScene())}
              role="button"
              tabIndex={0}
            >
              <Icon className="text-56" color="secondary">
                add_circle
              </Icon>
              <Typography className="text-16 font-medium text-center pt-16 px-32" color="inherit">
                Add new scene
              </Typography>
            </Paper>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default withReducer('unrealApp', reducer)(Scenes);
