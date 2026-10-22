# deprecated as client will handle the alarm logic

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
print('\n\n\n\n\n\n\n\n\n\n\n\n\n',BASE_DIR)
FILE = os.path.join(BASE_DIR, 'alarms.txt')

# get alarms 
def read_alarms() -> list:
  alarm_list = []
  with open(FILE,'r',encoding='utf-8') as file:
    for ln in file:
      line = ln.strip()
      alarm_list.append(line)
      
  return alarm_list
  
# add alarm
def add_alarm(alarm_str:str) -> str:
  current_alarm_list:list[str] = read_alarms()
  current_alarm_list.append(alarm_str)
  alarm_writer(current_alarm_list)
      
  return f'added: {alarm_str}'
  
# delete alarm
def del_alarm(alarm_index:int) -> str:
  current_alarm_list: list[str] = read_alarms()
  if len(current_alarm_list) < 1:
    return 'alarm list is empty\nnothing to delete'
  
  if alarm_index >= len(current_alarm_list):
    return f'index: {alarm_index} is out of bounds'
  
  deleted_alarm = current_alarm_list.pop(alarm_index)
  alarm_writer(current_alarm_list)
  
  return f'deleted: {deleted_alarm}'
  
def alarm_writer(alarm_list:list[str]) -> None:
  with open(FILE,'w',encoding='utf-8') as file:
    for alarm in alarm_list:
      file.write(f'{alarm}\n')
    