import React from 'react';
import { Link } from 'react-router-dom';

import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

const Single = () => {
  console.log('a');
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="content" />

        <div className="user">
          <img src="" alt="user" />

          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to="/write/?edit=2">
              <img src={Edit} alt="edit" />
            </Link>
            <Link to="/write/edit=2">
              <img src={Delete} alt="delete" />
            </Link>
          </div>
        </div>

        <h1>Lorem ipsum dolor</h1>
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem ac
          cusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
          explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut o
          dit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptat
          em sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit
          , amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora in
          cidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad mini
          ma veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nis
          i ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit,
          qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum,
          qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et
          accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium v
          oluptatum deleniti atque corrupti, quos dolores et quas molestias exceptu
          ri sint, obcaecati cupiditate non provident, similique sunt in culpa, qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
          quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
          soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, q
          uod maxime placeat, facere possimus, omnis voluptas assumenda est, omni
          s dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
          aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae s
          int et molestiae non recusandae. Itaque earum rerum hic tenetur a sapi
          ente delectus, ut aut reiciendis voluptatibus maiores alias consequatu
          r aut perferendis doloribus asperiores
          repellat.
        </p>
      </div>
      <div className="menu">menu</div>
    </div>
  );
};

export default Single;
