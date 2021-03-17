FROM python:slim
COPY . .
RUN pip install -r requirements.txt

ENTRYPOINT [ "uvicorn" ]
CMD [ "app:app", "--port", "8000", "--host", "0.0.0.0" ]