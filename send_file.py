import requests

def send_pcap_to_server(pcap_file_path):
    url = 'http://3.80.152.204:5000/upload'
    files = {'file': open(pcap_file_path, 'rb')}
    response = requests.post(url, files=files)
    if response.status_code == 200:
        print("Server response:", response.json())
    else:
        print("Failed to upload file. Status code:", response.status_code)

# Example usage
pcap_file_path = 'D:/D/file_transfer/dt.sav'
send_pcap_to_server(pcap_file_path)
