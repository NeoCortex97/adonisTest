import { http } from './../config/app';
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/surveys', 'SurveyController.index')
router.get('/surveys/create', 'SurveyController.create')
router.post('/surveys', 'SurveyController.store');
router.get('/surveys/:id', 'SurveyController.show');
router.get('/surveys/:id/edit', 'SurveyController.edit');
router.put('/surveys/:id', 'SurveyController.update');
router.delete('/surveys/:id', 'SurveyController.destroy');

