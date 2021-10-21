﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

// add this for MessageBox
using System.Windows.Forms;

// add data function classes
using System.Data;

namespace LoginRegisterWindows
{
    class Config
    {
        string ConnectionString = "";
        public MySqlConnection connection = null;
        public string server = "localhost";
        public string user = "root";
        public string password = "root";

        DataSet ds;
        DataTable dt;

        public string Table = "tbl_user_info";
        public string ConnectionType = "";
        string RecordSource = "";

        DataGridView tempdata;

        public Config()
        { 
        
        }

        public void Connect(string database_name)
        {
            try
            {
                ConnectionString = "SERVER=" + server + ";" + 
                    "DATABASE=" + database_name + ";" + 
                    "UID=" + user + ";" + 
                    "PASSWORD=" + password + ";";

                connection = new MySqlConnection(ConnectionString);
            }
            catch (Exception E)
            {
                MessageBox.Show(E.Message);
            }
        }

        public void ExecuteSql(string Sql_command)
        {
            nowquiee(Sql_command);
        }

        public void nowquiee(string sql_comm)
        {
            try
            {
                MySqlConnection cs = new MySqlConnection(ConnectionString);
                cs.Open();
                MySqlCommand myc = new MySqlCommand(sql_comm, cs);
                myc.ExecuteNonQuery();

                cs.Close();
            }
            catch(Exception err)
            {
                MessageBox.Show(err.Message);
            }
        }

        public void Execute(string Sql_command)
        {
            RecordSource = Sql_command;
            ConnectionType = Table;
            dt = new DataTable(ConnectionType);

            try
            {
                string command = RecordSource.ToUpper();

                //============ if sql contains select ===============
                MySqlDataAdapter da2 = new MySqlDataAdapter(RecordSource, connection);

                DataSet tempds = new DataSet();
                da2.Fill(tempds, ConnectionType);
            }
            catch (Exception err) { MessageBox.Show(err.Message);  }
        }

        public string Results(int ROW, string COLUMN_NAME)
        {
            try
            {
                return dt.Rows[ROW][COLUMN_NAME].ToString();
            }
            catch (Exception err)
            {
                MessageBox.Show(err.Message);
                return "";
            }
        }

        public void ExecuteSelect(string Sql_command)
        {
            RecordSource = Sql_command;
            ConnectionType = Table;

            dt = new DataTable(ConnectionType);

            try
            {
                string command = RecordSource.ToUpper();
                MySqlDataAdapter da = new MySqlDataAdapter(RecordSource, connection);
                ds = new DataSet();
                da.Fill(ds, ConnectionType);
                da.Fill(dt);
                tempdata = new DataGridView();
            }
            catch(Exception err)
            {
                MessageBox.Show(err.Message);
            }
        }

        public MySqlDataReader getDatagrid()
        {
            Connect("db_userdata");

            using (MySqlCommand cmd = new MySqlCommand("SELECT * FROM tbl_customers", connection))
            {
                connection.Open();
                MySqlDataReader reader = cmd.ExecuteReader();
                try
                {
                    return reader;
                }
                catch (Exception err)
                {
                    MessageBox.Show(err.Message);
                    return reader;
                }
            }
        }

        public int Count()
        {
            return dt.Rows.Count;
        }
    }
}