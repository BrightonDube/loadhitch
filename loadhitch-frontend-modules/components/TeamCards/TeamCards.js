import React from 'react';
import styles from '../../styles/TeamSection.module.css';
import SingleTeamCard from './SingleTeamCard';

const TeamCard = () => {
    return (
        <section className={styles.team_section}>
            <div className="container">
                <div className="section-title">
                    <span>Team</span>
                    <h3>Meet Our Team</h3>
                </div>

                <div className="row">
                    {
                        [1, 2, 3].map((item) => (
                            <SingleTeamCard key={item} />
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default TeamCard;