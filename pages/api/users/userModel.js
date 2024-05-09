 import pool from "../../../config/db";

 const UserModel = {
    async getUserById(userId) {
      try {
        const [rows] = await pool.query("SELECT * FROM user WHERE uid = ?", [userId]); // Changed 'id' to 'uid'
        return rows[0];
      } catch (error) {
        throw error;
      }
    },
  
    async createUser(username, email, password, phone) {
      try {
        await pool.query("INSERT INTO user (username, email, password, phone) VALUES (?, ?, ?, ?)", [username, email, password, phone]);
      } catch (error) {
        throw error;
      }
    },
  
    async updateUserById(userId, username, email, password, phone) {
      try {
        await pool.query("UPDATE user SET username = ?, email = ?, password = ?, phone = ? WHERE uid = ?", [username, email, password, phone, userId]); // Changed 'id' to 'uid'
      } catch (error) {
        throw error;
      }
    },
  
    async deleteUserById(userId) {
      try {
        await pool.query("DELETE FROM user WHERE uid = ?", [userId]); // Changed 'id' to 'uid'
      } catch (error) {
        throw error;
      }
    }
  };
  
  export default UserModel;
  