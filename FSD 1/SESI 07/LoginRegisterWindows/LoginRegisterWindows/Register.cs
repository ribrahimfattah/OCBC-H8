using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LoginRegisterWindows
{
    public partial class Register : Form
    {
        Config db = new Config();
        public Register()
        {
            InitializeComponent();
            db.Connect("db_userdata");
        }

        private void btnExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnRegister_Click(object sender, EventArgs e)
        {
            if (tbNama.Text == "")
            {
                MessageBox.Show("Please insert your name!");
            }
            else if (tbUsername.Text == "")
            {
                MessageBox.Show("Please insert your username!");
            }
            else if (tbPassword.Text == "")
            {
                MessageBox.Show("Please insert your password!");
            }
            else
            {
                if (tbConfirnPassword.Text != tbPassword.Text)
                {
                    MessageBox.Show("Password and Confirm password must be the same!");
                }
                else if (tbPassword.Text.Length < 4)
                {
                    MessageBox.Show("Password must be more than 3 characters!");
                }
                else
                {
                    db.Execute("INSERT INTO tbl_user_info (nama, username, password) VALUES ('" + tbNama.Text + "', '" + tbUsername.Text + "', '" + tbPassword.Text + "')");
                    MessageBox.Show("User Registered!");
                    this.Close();
                }
            }
        }
    }
}
