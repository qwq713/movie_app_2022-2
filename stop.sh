#!/bin/bash

echo "===================== stop.sh Script ====================="

port_num=3000
process_pid=`lsof -i:$port_num | grep -v PID | grep -i "listen" | awk '{print $2}'`

if [ -z "$process_pid" ];
then
  echo "$port_num is available"
else
  process_ppid=`ps -o ppid= -p $process_pid | tr -d '[:space:]'`
  echo "kill -9 $process_pid ..."
  kill -9 "$process_pid"
  echo "kill -9 $process_ppid ..."
  kill -9 "$process_ppid"

  sleep 3
  echo "$port_num is down, so $port_num is available"
fi

echo "===================== stop.sh Script Complete ============"