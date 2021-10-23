using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace LoginRegisterWindows
{
    public partial class Dashboard : Form
    {
        Config db = new Config();
        public static int id;
        bool isCari = false;

        public Dashboard()
        {
            InitializeComponent();
            db.Connect("db_userdata");
        }

        private void Data_Load(object sender, EventArgs e)
        {
            txtUsername.Text = Form1.SetValueUsername;
            txtNamaLogin.Text = Form1.SetValueNamaLogin;

            initializeForm();

        }

        private void initializeForm()
        {
            txtNama.Text = "";
            txtAlamat.Text = "";
            txtNoHp.Text = "";

            txtUsername.ReadOnly = true;
            txtNamaLogin.ReadOnly = true;
            dataGridView1.ReadOnly = true;

            txtNama.ReadOnly = true;
            txtAlamat.ReadOnly = true;
            txtNoHp.ReadOnly = true;

            btnBatal.Enabled = false;
            btnSimpan.Enabled = false;
            btnHapus.Enabled = false;
            btnEdit.Enabled = false;

            btnIsCari.Hide();
            lblCari.Show();
            lblIsCari.Hide();

            LoadDataGrid("*");
        }

        private void inputForm()
        {
            txtNama.ReadOnly = false;
            txtAlamat.ReadOnly = false;
            txtNoHp.ReadOnly = false;


        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void dataGridView1_CellMouseDoubleClick(object sender, DataGridViewCellMouseEventArgs e)
        {
            if (isCari)
            {
                MessageBox.Show("Anda sedang dalam mode cari!");
            }
            else
            {
                inputForm();

                btnEdit.Enabled = true;
                btnHapus.Enabled = true;
                btnBatal.Enabled = true;

                txtNama.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
                txtAlamat.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
                txtNoHp.Text = dataGridView1.CurrentRow.Cells[3].Value.ToString();
                id = int.Parse(dataGridView1.CurrentRow.Cells[0].Value.ToString());
            }
            
        }

        private void btnCari_Click(object sender, EventArgs e)
        {
            isCari = true;

            txtNama.Text = "";
            txtAlamat.Text = "";
            txtNoHp.Text = "";

            txtAlamat.ReadOnly = true;
            txtNoHp.ReadOnly = true;
            txtNama.ReadOnly = false;

            lblCari.Hide();
            lblIsCari.Show();
            btnBatal.Enabled = true;
            btnIsCari.Show();
        }

        private void btnIsCari_Click(object sender, EventArgs e)
        {
            if(txtNama.Text == "")
            {
                MessageBox.Show("Siapa yang akan dicari? Nama belum diisi");
            }
            else
            {
                isCari = false;
                btnIsCari.Hide(); 
                lblCari.Show();
                lblIsCari.Hide();
                LoadDataGridSelect(txtNama.Text);
            }
        
        }

        private void btnBatal_Click(object sender, EventArgs e)
        {
            isCari = false;
            initializeForm();
        }

        private void btnTambah_Click(object sender, EventArgs e)
        {
            if (isCari)
            {
                MessageBox.Show("Anda sedang dalam mode cari!");
            }
            else
            {
                inputForm();

                btnBatal.Enabled = true;
                btnSimpan.Enabled = true;
            }

        }

        private void btnSimpan_Click(object sender, EventArgs e)
        {
            if (txtNama.Text == "")
            {
                MessageBox.Show("Nama Tidak boleh kosong!");
            }
            else if (txtAlamat.Text == "")
            {
                MessageBox.Show("Alamat Tidak boleh kosong!");
            }
            else if (txtNoHp.Text == "")
            {
                MessageBox.Show("No Hp Tidak boleh kosong!");
            }
            else
            {
                db.Execute($"INSERT INTO `tbl_customers` (`nama`,`no_hp`,`alamat`) VALUES ('{txtNama.Text}', '{txtNoHp.Text}', '{txtAlamat.Text}')");

                MessageBox.Show("Data baru ditambahkan!");

                initializeForm();

            }

        }

        private void btnEdit_Click(object sender, EventArgs e)
        {
            if (txtNama.Text == "")
            {
                MessageBox.Show("Nama tidak boleh kosong!");
            }
            else if (txtAlamat.Text == "")
            {
                MessageBox.Show("Alamat Tidak boleh kosong!");
            }
            else if (txtNoHp.Text == "")
            {
                MessageBox.Show("No HP tidak boleh Kosong!");
            }
            else
            {
                db.Execute($"UPDATE `tbl_customers` SET nama= '{txtNama.Text}',no_hp='{txtNoHp.Text}', alamat= '{txtAlamat.Text}' WHERE id='{id}'");

                MessageBox.Show("Data berhasil diupdate!");

                initializeForm();

            }
        }

        private void btnHapus_Click(object sender, EventArgs e)
        {
            db.Execute($"DELETE FROM `tbl_customers` WHERE id='{id}'");

            MessageBox.Show("Data berhasil dihapus!");

            initializeForm();
        }


        private void LoadDataGrid(string query)
        {
            MySqlDataAdapter da = new MySqlDataAdapter($"SELECT {query} FROM tbl_customers", "server = localhost; database = db_userdata; UID = root; password = root");
            DataSet ds = new DataSet();
            da.Fill(ds, "tbl_customers");
            dataGridView1.DataSource = ds.Tables["tbl_customers"];
        }

        private void LoadDataGridSelect(string query)
        {
            MySqlDataAdapter da = new MySqlDataAdapter($"SELECT * FROM tbl_customers WHERE nama = '{query}'", "server = localhost; database = db_userdata; UID = root; password = root");
            DataSet ds = new DataSet();
            da.Fill(ds, "tbl_customers");
            dataGridView1.DataSource = ds.Tables["tbl_customers"];
        }

        private void label6_Click(object sender, EventArgs e)
        {

        }
    }
}