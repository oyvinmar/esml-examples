/** @jsx esml */
import esml from 'esml';
import persons from './persons';

const html =(
  <article>
    <header>
      <h2>Example with jsx</h2>
    </header>
    <section>
      <table className="table">
        <thead>
          <tr>
            <th>Given name</th>
            <th>Surname</th>
            <th className="align-right">Year of birth</th>
            <th>Wikipedia link</th>
          </tr>
        </thead>
        <tbody>
          { persons.map(person => (
            <tr>
              <td>{person.givenName}</td>
              <td>{person.surname}</td>
              <td className="align-right">{person.yearOfBirth}</td>
              <td><a href={person.wikiURL}>Link</a></td>
            </tr>
          )) }
        </tbody>
      </table>
    </section>
  </article>
  );

export default html;
