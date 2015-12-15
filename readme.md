# Introduction

This is an express middleware to make response more easier.

# Example

So you can return a success response like this.

```js
router.get('/', function (req, res) {
  mysql('SELECT * FROM `test`')
    .then(function (data) {
      res.success(data); // { status: 'OK', data: [data] }
    })
    .catch(function (err) {
      res.failure(err); // { status: 'ERROR' }
    });
});
```

And you can return a failure reponse like this.
