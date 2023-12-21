from web import *
import time

# this calls the color function in the web.py file to turn on the light
# now you can put this into a cron job to turn on the light at a certain time
color('on')
time.sleep(1)
color('orange1')