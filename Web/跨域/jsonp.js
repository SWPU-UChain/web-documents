function jsonp(url, data) {
    let params = '';
    for (let key in data) {
        if (params === ''){
            params = '?';
        }
        params = params + key + '=' + data[key] + '&';
    }
    url = url + params.slice(1);
    const script = document.createElement('script');
    script.type = 'javascript';
    let body = document.getElementsByTagName('body');
    body.appendChild(script);
}
jsonp({ll: '22', pp: '333', callback: '_jsonp'});