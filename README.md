# Hyperion Plugin Sample

Install plugin (hpm - hyperion plugin manager)

Hyperion History v3.3.5+ required
```bash
# install from this repository
./hpm install -r https://github.com/eosrio/hyperion-sample-plugin sample
# enable the plugin globally
./hpm enable sample
```

Required plugin config on chain.config.json

```json
{
  "plugins": {
    "sample": {
      "enabled": true
    }
  }
}
```
