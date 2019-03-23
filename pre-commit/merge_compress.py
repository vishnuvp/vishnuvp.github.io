import httplib, urllib, sys, glob

# Define the parameters for the POST request and encode them in
# a URL-safe format.

params = [
	("js_code", "https://raw.githubusercontent.com/vishnuvp/vishnuvp.github.io/blob/master/scripts/jsonload.js"),
	("code_url", "https://raw.githubusercontent.com/vishnuvp/vishnuvp.github.io/blob/master/scripts/script.js"),
	("code_url", "https://raw.githubusercontent.com/vishnuvp/vishnuvp.github.io/master/scripts/wow.js"),
    ('compilation_level', 'WHITESPACE_ONLY'),
    ('output_format', 'text'),
    ('output_info', 'compiled_code'),
  ]
  

params = urllib.urlencode(params)

# Always use the following value for the Content-type header.
headers = { "Content-type": "application/x-www-form-urlencoded" }
conn = httplib.HTTPSConnection('closure-compiler.appspot.com')
conn.request('POST', '/compile', params, headers)
response = conn.getresponse()
data = response.read()
print (data)
conn.close()
