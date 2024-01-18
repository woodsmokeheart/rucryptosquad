/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./RanksUtility.module.scss";

export const RanksUtilityResident = () => {
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export const RanksUtilitySenator = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sub_title}>This token can only be redeemed.</div>
      <p>
        1. After purchasing this token from the project team, the user receives
        all the privileges that are tied to the rank of “Senator“, as well as
        available to members of the DAO.
      </p>
      <p>
        2. The token is nominal and the user is recorded in the history of the
        world of Ethereum.
      </p>
      <p>
        3. Upon receiving a token from the project team, the participant also
        receives permission to use it fully for their own purposes. The
        copyright of the image remains with the Community.
      </p>
      <p>
        4. The Senator token can be purchased on the secondary market, but it
        does not give the right to join the DAO, without the approval of the
        community members of the person who bought the token, as well as after
        they apply for membership. The utility remains unavailable and is not
        provided until the person who bought the token is accepted into the
        community.
      </p>
      <p>
        5. The utility related to the communitys merch is provided only to the
        first owner of the token.
      </p>
      <p>
        6. If a token of this rank was sold by the owner on the secondary
        market, was lost or donated, then re-obtaining an NFT of this rank is
        possible only through a one-time contribution to the treasury of the
        project of funds equivalent to 50% of the value of the token at the
        moment.At the time of the "loss, sale, loss, etc." of the token, the
        utility is terminated and the user is excluded from the closed chat
        until a new, punitive purchase of a token of at least Resident rank, if
        the user does not have one. The price tag is set directly by the
        treasurer, depending on the assessment of the importance of the
        participant.If there is a Resident rank token, then the participant
        'falls' up to its advantages and is saved in the chat.
      </p>
      <p>
        7. When transferring a token of this rank to another person, the
        participant loses all Senator privileges and moves to the Resident rank.
      </p>
      <p>
        8. Further promotion from Resident takes place according to the Item on
        raising ranks.
      </p>
      <div className={styles.sub_title}>Senator utility</div>
      <p>1. Access to the private chat of RCS members.</p>
      <p>
        2. Access to the RSS Hub (NET exchanger) in accordance with the Rules of
        its use.
      </p>
      <p>
        3. Access to sweepstakes of various valuable tokens aimed at RCS
        members.
      </p>
      <p>
        4. Access to membership auctions where various valuable tokens will be
        presented.
      </p>
      <p>
        5. The right to vote as a member of the DAO on all matters related to
        the community.
      </p>
      <p>6. Getting OG and WL for all subsequent DAO collections.</p>
      <p>7. T-shirt from the RCS community.</p>
      <p>8. A physical image in the frame of the participant's token.</p>
      <p>
        9. Receiving 0.25% of the community's income from sales of subsequent
        collections of the community, except for the Main Collection. The
        payments do not include Community collaborations or collections that are
        not focused on generating income for the community.
      </p>
      <p>This list is not final, but it is minimal.</p>
      <p>
        By agreement and vote of the DAO, adjustments to the description are
        possible.
      </p>
    </div>
  );
};
