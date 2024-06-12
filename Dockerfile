FROM node

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 4323

CMD ["node", "/home/app/app.js"]