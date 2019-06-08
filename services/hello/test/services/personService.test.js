import { expect } from 'chai';
import PersonService from '../../src/services/personService';

describe('Person', () => {
  const service = new PersonService();
  describe('helloMessage', () => {
    it("should return 'Hello World!'", () => {
      const result = service.helloMessage();
      expect(result).to.be.a('string').that.equals('Hello World!');
    });
  });
});
