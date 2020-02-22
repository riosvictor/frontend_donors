import React, { Component } from 'react';
import api from '../../services/api';
import "./styles.css";


class Main extends Component {
  state = {
		donors: []
	};

	componentDidMount(){
		this.loadDonors();
	}

	loadDonors = async () => {
    const response = await api.get('/donors');
    
    console.log(response.data._embedded);

		this.setState( response.data._embedded );
	};

  render() {
    const { donors } = this.state;

    return (
      <main>
        <h2>Últimos <span>doadores</span></h2>

        <section className="donors">
          {donors.map(donor => (
            <div key={ donor.id } className="donor">
              <div className="blood">{ donor.blood }</div>
              <p>{ donor.name }</p>
            </div>
          ))}
        </section>
      </main>
    );
  }
}

export default Main;