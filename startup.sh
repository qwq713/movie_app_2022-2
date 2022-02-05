#!/bin/bash
cd /ext001/movie-app-2022/
nohup npx serve -s ./build >> reactLogs2022 2>&1 &