from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager


chrome_driver_path = "C:\Users\ribra\.wdm\drivers\chromedriver\win32\95.0.4638.69\chromedriver.exe"
browser = webdriver.Chrome(executable_path=chrome_driver_path)

browser.get('https://shopee.co.id/buyer/login?next=https%3A%2F%2Fshopee.co.id%2F')

# Interaksi Otomatis
# Email dan Password Shopee
email = "qqqqqq"
password = "qqqqqq"

# Mengisi Email dan Password
browser.find_element_by_css_selector("._3nZHpB ._3mizNj").send_keys(email)
browser.find_element_by_css_selector("._35M4-Y ._3mizNj").send_keys(password)

# Klik Log In
browser.find_element_by_css_selector(
    '._1ruZ5a ._3Nrkgj ._3kANJY ._1IRuK_ .hh2rFL ._3_offS').click()
