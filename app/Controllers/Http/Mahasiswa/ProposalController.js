'use strict'

// const Database = use('Database')

class ProposalController {
    async pengajuanIndex({auth, view}){
        const user = auth.user
        // const db = await Database.connect('mongodb')
        const data = {
            'user': user.toJSON()
        }

        return view.render('mahasiswa.proposal.pengajuan', data)
    }

    async seminarIndex({auth, view}) {
        const user = auth.user
        // const db = await Database.connect('mongodb')
        const data = {
            'user': user.toJSON()
        }

        return view.render('mahasiswa.proposal.seminar', data)
    }

}

module.exports = ProposalController
