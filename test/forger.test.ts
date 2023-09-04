import Forger from '../src/forger';

describe('Forger', () => {
  it('should render a template with placeholders', () => {
    const template = 'Hello, {{user.name}}! Your email is {{user.email}}.';
    const data = {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    };
    const forger = new Forger(template);
    const result = forger.forge(data);

    expect(result).toBe('Hello, John Doe! Your email is john@example.com.');
  });

  it('should escape placeholders', () => {
    const template = 'This is an escaped placeholder: \\{{escaped\\}}';
    const data = {
      escaped: 'Not Escaped',
    };
    const forger = new Forger(template);
    const result = forger.forge(data);

    expect(result).toBe('This is an escaped placeholder: {{escaped}}');
  });

  it('should throw an error for missing placeholders', () => {
    const template = 'Hello, {{user.name}}! Your email is {{user.email}}.';
    const data = {
      user: {
        name: 'John Doe',
      },
    };
    const forger = new Forger(template);

    expect(() => forger.forge(data)).toThrowError(
      'Value not found for placeholder: {{user.email}}'
    );
  });

  it('should handle complex data objects', () => {
    const template = '{{user.name}} has {{user.followers.length}} followers.';
    const data = {
      user: {
        name: 'Alice',
        followers: ['Bob', 'Charlie', 'David'],
      },
    };
    const forger = new Forger(template);
    const result = forger.forge(data);

    expect(result).toBe('Alice has 3 followers.');
  });
});
