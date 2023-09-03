import moment from 'moment'

import 'moment/locale/en-nz'

moment.locale('en-nz')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
