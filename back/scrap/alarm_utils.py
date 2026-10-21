import os
import main 

BASE_DIR = main.BASE_DIR
FILE = os.path.join(BASE_DIR, 'alarms.xxx')

# all deprecated as logic was modified

# def read_alarms():
#   data = {}
#   with open(FILE,'r',encoding='utf-8') as f:
#     for line_no, line in enumerate(f,1):
#       ln = line.strip()
#       split_times = ln.split('->')
#       start = split_times[0]
#       end = split_times[1]
#       data[f'{line_no}'] = {
#         'start':start,
#         'end':end,
#         'raw':ln
#       }
#       #print(f'{line_no}: {ln}')
  
#   return data
  
  
# def add_alarm(*,start_time,end_time):
#   with open(FILE,'a',encoding='utf-8') as f:
#     f.write(f'\n{start_time} -> {end_time}')
    
#   return f'added alarm: {start_time} -> {end_time}'
  
  
# def delete_alarm(*,alarm_id):
#   data = read_alarms()
#   del_data = data[f'{alarm_id}'].raw
#   del data[f'{alarm_id}']
#   with open(FILE,'w',encoding='utf-8') as f:
#     f.write(data)

#   return f'deleted alarm: {del_data}'


# def update_alarm(*,alarm_id,new_start=None,new_end=None):
#   data = read_alarms()
#   add_start = new_start or None
#   add_end = new_end or None
  
#   if add_start and add_end: # check if theyre both empty
#     return 'no change needed'
    
#   alarm = data[f'{alarm_id}']
#   if add_start != None:
#     alarm['start'] = add_start
    
#   if add_end != None:
#     alarm['end'] = add_end
    
#   if add_end != None and add_start
    
#   with open(FILE,'w',encoding='utf-8') as f:
#     f.write(data)
    
#   return f'updated'