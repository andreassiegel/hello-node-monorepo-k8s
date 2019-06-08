import PersonService from '../services/personService';

class PersonController {
  constructor() {
    console.log('Initialized PersonController');
    this.service = new PersonService();
  }

  sayHello = (req, res, next) => {
    res.status(200);
    res.json({ message: this.service.helloMessage() });

    next();
  };
}

export default PersonController;
