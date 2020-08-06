const conn = require('../lib/conn');
const userQuery = require('../../queries/user/userQuery');

const getUser = async (usn) => {
  if (Number.isNaN(usn)) {
    return res.status(200).json({ statusCode: 501, message: '잘못된 매개변수 타입' });
  }
  let data = conn.connection(userQuery.getUser, [usn]);
  return await data;
}

const getUpdateUser = async (user) => {
  let data = await conn.connection(userQuery.updateUser, user);
  return data;
}

module.exports = {
  getUser,
  getUpdateUser,
}




// exports.deleteComment = async (boardId, commentId) => {
//     let conn = await pool.getConnection()
//     try {
//         await conn.beginTransaction()

//         let del = await conn.query(BoardQuery.deleteComment, [commentId])
//         if (del[0].affectedRows == 1) {
//             let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId])
//         }
//         await conn.commit()

//         return del[0]
//     } catch (err) {
//         conn.rollback()
//         console.log(err)
//         throw Error(err)
//     } finally {
//         conn.release()
//     }
// }
