import esml from 'esml';
import persons from './persons';

const html =
  esml('article', null,
    esml('header', null,
      esml('h2', null, 'Example without jsx')
    ),
    esml('section', null,
      esml('table', { className: 'table'},
        esml('thead', null,
          esml('tr', null,
            esml('th', null, 'Given name'),
            esml('th', null, 'Surname'),
            esml('th', { className: 'align-right'}, 'Year of birth'),
            esml('th', null, 'Wikipedia link')
          )
        ),
        esml('tbody', null, persons.map(person => esml('tr', null,
          esml('td', null, person.givenName),
          esml('td', null, person.surname),
          esml('td', { className: 'align-right' }, person.yearOfBirth),
          esml('td', null ,
            esml('a', { href: person.wikiURL }, 'Link')
          )
        )))
      )
    )
  );

export default html;
