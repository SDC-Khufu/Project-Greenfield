import React from 'react';
import moment from 'moment';
import Helpful from './Helpful.jsx';

const Answer = ({ info }) => {
  const photos = info.photos.length > 0 ? <div>insert photos</div> : '';
  return (
    <div>
      <p>{info.body}</p>
      {photos}
      <p>
        by {info.answerer_name}, {moment(info.date).format('MMMM DD, YYYY')} |{' '}
        <Helpful count={info.helpfulness} type={'answer'} />
      </p>
    </div>
  );
};

export default Answer;