import * as Yup from 'yup';
import File from '../models/File';
import Product from '../models/Product';

class UserController {
  async store(req, res) {
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const {
      id,
      name,
      categoria,
      altura,
      largura,
      comprimento,
      codigoDeBarra,
      peso,
      preço,
      descriçao,
    } = await Product.create(req.body);

    return res.json({
      id,
      name,
      categoria,
      altura,
      largura,
      comprimento,
      codigoDeBarra,
      peso,
      preço,
      descriçao,
    });
  }

  async fillProduct(req, res) {
    const { name } = req.params;

    const product = await Product.findAll({
      where: {
        name: name,
      },
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(8)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }
}
export default new UserController();
