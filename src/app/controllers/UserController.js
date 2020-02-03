import User from '../models/User';

class UserController {
  // recebe os mesmos parametros do node
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      // passa o body e o sequelize se acha pelo nome dos campos
      return res.status(400).json({ message: 'Email já cadastrado.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      usuario: {
        id,
        name,
        email,
        provider,
      },
    });
  }
}

export default new UserController();
