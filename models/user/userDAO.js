const pool = require('../../database/pool');
const userQuery = require('../../queries/user/userQuery');

exports.getUser = async (usn) => {
    try {
        let data = await pool.query(userQuery.getUser, [usn]);
        return data;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.getUpdateUser = async (user) => {
    console.log(user);
    let conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        let update = await conn.query(userQuery.updateUser, user);
        await conn.commit();
        return update[0];
    } catch (err) {
        conn.rollback()
        console.log(err)
        throw Error(err)
    } finally {
        conn.release();
    }
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