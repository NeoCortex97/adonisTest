const Survey = use('App/Models/Survey');

class SurveyController {
  async index ({ view }) {
    const surveys = await Survey.all();
    return view.render('surveys.index', { surveys });
  }

  async create ({ view }) {
    return view.render('surveys.create');
  }

  async store ({ request, response }) {
    const data = request.all();
    const survey = await Survey.create(data);
    response.redirect(`/surveys/${survey.id}`);
  }

  async show ({ params, view }) {
    const survey = await Survey.findOrFail(params.id);
    return view.render('surveys.show', { survey });
  }

  async edit ({ params, view }) {
    const survey = await Survey.findOrFail(params.id);
    return view.render('surveys.edit', { survey });
  }

  async update ({ params, request, response }) {
    const data = request.all();
    const survey = await Survey.findOrFail(params.id);
    await survey.merge(data);
    await survey.save();
    response.redirect(`/surveys/${survey.id}`);
  }

  async destroy ({ params, response }) {
    const survey = await Survey.findOrFail(params.id);
    await survey.delete();
    response.redirect('/surveys');
  }
}

module.exports = SurveyController;
